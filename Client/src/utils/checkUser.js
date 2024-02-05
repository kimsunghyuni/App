const checkUser = async () => {
  try {
    const response = await fetch('/api/check-user');
    const data = await response.json();
    if (data.isLoggedIn) {
      console.log("User is logged in");
      return true;
    } else {
      console.log("User is not logged in");
      return false;
    }
  } catch (error) {
    console.error("Error checking login status:", error);
    return false;
  }
};

export default checkUser ;
