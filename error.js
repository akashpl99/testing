const CreateError = (status, msg) => {
  let err = new Error();

  err.status = status || 500;
  err.message = msg || "something  went wrong";

  return err;
};


  model.exports= CreateError;
  