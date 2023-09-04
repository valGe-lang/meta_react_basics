import Weekend from "./Weekend";
import Workdays from "./Workdays";

function CurrentMessage () {
    const day = new Date().getDate();
    if(day >= 1 && day <= 5) {
      return <Workdays />
    }
    return <Weekend />
}

    export default CurrentMessage;