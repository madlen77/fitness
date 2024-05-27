import DayButton from "./DayButton";

let showAll = true;
function workouts3 () {
    if (showAll === false){
        showAll = true;
        return(
        <div>
            {
          workouts.map((workout) => (
            <div key={workout.id}>
                <DayButton day={workout.day} />
            </div>
        ))  
        }
        </div>
        );
    } else {
        showAll = false;
        return(
        <div>
            {
          workouts3.map((workout) => (
            <div key={workout.id}>
                <DayButton day={workout.day} />
            </div>
        ))  
        }
        </div>
    );
    }
}

export default workouts3