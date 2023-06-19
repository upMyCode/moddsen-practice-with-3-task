import Modal from '../../components/Modal'
import UserSignUp from '../../components/UserSignUp'
import UserLogin from '../../components/UserLogIn '
import UserLogOut from '../../components/UserLogOut'
import TypeViewForm from './TypeViewForm'

const ViewForm = ({ status, modalName }: TypeViewForm) => (
  <>
    {status && modalName && (
      <Modal>
        {modalName === 'sign-up' ? (
          <UserSignUp />
        ) : modalName === 'log-in' ? (
          <UserLogin />
        ) : (
          <UserLogOut />
        )}
      </Modal>
    )}
  </>
)

export default ViewForm
