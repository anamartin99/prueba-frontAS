const AuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    return `Bearer ${user.accessToken}`;
  }
  return '';
};

export default AuthHeader;
