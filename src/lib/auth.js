export const login = (values) => {
  console.log("form data", values);
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => {
        const userFound = (data || []).find(
          (user) =>
            user.username === values.username &&
            user.password === values.password
        );
        console.log(userFound);
        if (userFound) {
          resolve();
        } else {
          reject("USER NOT FOUND");
        }
      })
      .catch(() => {
        reject("NETOWRK ERROR");
      });
  });
};
