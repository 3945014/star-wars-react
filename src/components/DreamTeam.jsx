import {friends} from "../utils/constants.js";
import Friend from "./Friend.jsx";


const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border border-warning rounded-bottom-5 me-0 ms-1">
            <h2 className="text-center">Dream team</h2>
            {friends.map((f, i) => <Friend friend={f} pos={i+1} key={i}/>)}
            {/*<img className="col-sm-4 p-1" src={friend1} alt="Friend"/>*/}
            {/*<img className="col-sm-4 p-1" src={friend2} alt="Friend"/>*/}
            {/*<img className="col-sm-4 p-1" src={friend3} alt="Friend"/>*/}
            {/*<img className="col-sm-4 p-1" src={friend4} alt="Friend"/>*/}
            {/*<img className="col-sm-4 p-1" src={friend5} alt="Friend"/>*/}
            {/*<img className="col-sm-4 p-1" src={friend6} alt="Friend"/>*/}
            {/*<img className="col-sm-4 p-1 rounded-bottom-left" src={friend7} alt="Friend"/>*/}
            {/*<img className="col-sm-4 p-1" src={friend8} alt="Friend"/>*/}
            {/*<img className="col-sm-4 p-1 rounded-bottom-right" src={friend9} alt="Friend"/>*/}
        </section>
    );
};

export default DreamTeam;