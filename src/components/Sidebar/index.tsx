import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SIGHTS_TYPES from '../../constants/sightsType';
import type { TypeRootState } from '../../store';
import {
  setDistanceRadiusAction,
  setSearchCategoriesAction,
} from '../../store/action';
import SearchBar from '../SearchBar';
import {
  Content,
  Input,
  RadiusContainer,
  RadiusInfo,
  SearchButton,
  SightsContainer,
  SightsInfo,
  SightsList,
  Wrapper,
} from './styled';

function Sidebar() {
  const category = useSelector(
    (state: TypeRootState) => state.setSearchCategoriesReducer.category,
  );
  const dispatch = useDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSearchCategoriesAction(event.target.value));
  };

  const handleRadius = (e: React.ChangeEvent<HTMLInputElement>) => {
    const radiusValue = e.target.value;

    dispatch(setDistanceRadiusAction(Number(radiusValue)));
  };
  return (
    <Wrapper>
      <Content>
        <SearchBar width="250" />
        <Box sx={{ mt: 5, minWidth: 250 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Choose a places type:
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Places"
              onChange={handleChange}
            >
              {SIGHTS_TYPES.map((elem) => (
                <MenuItem key={elem.type} value={elem.type}>
                  {elem.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <SightsContainer>
          <SightsInfo>Места :</SightsInfo>
          <SightsList>Here should be content</SightsList>
        </SightsContainer>
        <RadiusContainer>
          <RadiusInfo>В радиусe :</RadiusInfo>
          <Input onChange={handleRadius} placeholder="10 м" width="80" />
        </RadiusContainer>
      </Content>
      <SearchButton>Search</SearchButton>
    </Wrapper>
  );
}

export default Sidebar;
