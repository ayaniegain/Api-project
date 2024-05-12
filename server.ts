import { config } from "./src/config/config";
import app from "./src/app";
import colors from "colors";
import connect from "./src/config/db"


async function serverUp() {
  await connect()
  const port = config.port || 8080;

  app.listen(port, () => {
    console.log(colors.yellow(`server is running on port : ${port}`));
  });
}

serverUp();
