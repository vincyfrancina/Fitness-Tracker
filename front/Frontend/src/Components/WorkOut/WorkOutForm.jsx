import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './WorkOutForm.css';
import axios from 'axios';
import {toast} from 'react-toastify'

const activityOptions = ['Walk', 'Run', 'Bike', 'Gym Workout'];

function WorkOutForm() {
  const [activity, setActivity] = useState(activityOptions[0]);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };

  const handleStartTimeChange = (time) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const getWeight = async () => {
    try {
      const response = await axios.get("http://localhost:8000/Getweights", {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const weight = response.data.weight;
      console.log(weight);
      return weight.toString();
    } catch (error) {
      console.error("Failed to fetch weight:", error);
      throw error; // Re-throw the error to handle it in the caller function
    }
  };

  const calculateCalories = async () => {
    const METValues = {
      Walk: 3.5,
      Run: 7,
      Bike: 6,
      "Gym Workout": 5,
    };

    try {
      const weight = await getWeight();
      const durationInMinutes = Math.abs(endTime - startTime) / (1000 * 60);

      if (activity in METValues) {
        const caloriesBurnedPerMinute = METValues[activity] * parseInt(weight);
        const totalCaloriesBurned = (caloriesBurnedPerMinute * durationInMinutes) / 100;
        setCaloriesBurned(totalCaloriesBurned.toFixed(2));
      } else {
        console.error("Invalid activity selected!");
      }
    } catch (error) {
      console.error("Failed to calculate calories:", error);
    }
  };

  const saveWorkoutSession = async () => {
    try {
      const data = {
        activity,
        startTime,
        endTime,
        date: selectedDate,
        caloriesBurned: parseFloat(caloriesBurned),
      };

    // Extract relevant information
    const month = data.date
      .toLocaleString("default", { month: "long" })
      .toLowerCase()
    const date1 = data.date.getDate()
    const activity1 = data.activity.toLowerCase()
    const duration = Math.round((data.endTime - data.startTime) / (1000 * 60 * 60)) // Duration in hours
    const calorie = Math.round(data.caloriesBurned)

    // Construct the desired object
    const convertedData = {
      month: month,
      date: date1,
      activity: activity1,
      duration: duration,
      calorie: calorie,
    }


      await axios.post("http://localhost:8000/postActivities", convertedData, {
				headers: {
					"Content-Type": "application/json",
				},
			})
      .then(()=>{
        toast.success("Activity Saved Successfully!")
      })

      // alert("Workout session saved successfully!");
    } catch (error) {
      console.error("Failed to save workout session:", error);
      // alert("Failed to save workout session.");
    }
  };

  return (
    <form>
      <label>
        Activity:
        <select value={activity} onChange={handleActivityChange}>
          {activityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label>
        Start Time:
        <DatePicker
          selected={startTime}
          onChange={handleStartTimeChange}
          showTimeSelect
          showTimeSelectMobile
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </label>

      <label>
        End Time:
        <DatePicker
          selected={endTime}
          onChange={handleEndTimeChange}
          showTimeSelect
          showTimeSelectMobile
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </label>

      <label>
        Date:
        <DatePicker selected={selectedDate} onChange={handleDateChange} />
      </label>

      <button type="button" onClick={calculateCalories}>
        Calculate Calories
      </button>

      <button type="button" onClick={saveWorkoutSession}>
        Save Workout Session
      </button>

      <label>
        Calories Burned: {caloriesBurned} kcal
      </label>

    </form>
  );
}

export default WorkOutForm;
  