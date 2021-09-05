import CoursesReducer from './CoursesReducer';
import ExamReducer from './ExamReducer';
import ForgotPasswordReducer from './ForgotPasswordReducer';
import PacksReducer from './PacksReducer';
import ProfileReducer from './ProfileReducer';
import SignInReducer from './SignInReducer';
import SignUpReducer from './SignUpReducer';
import VerifyMobileReducer from './VerifyMobileReducer';
import WebinarReducer from './WebinarReducer';

export default {
  SignIn: SignInReducer,
  SignUp: SignUpReducer,
  VerifyMobile: VerifyMobileReducer,
  Courses: CoursesReducer,
  Profile: ProfileReducer,
  Exam: ExamReducer,
  ForgotPassword: ForgotPasswordReducer,
  Webinar: WebinarReducer,
  Packs: PacksReducer,
};
