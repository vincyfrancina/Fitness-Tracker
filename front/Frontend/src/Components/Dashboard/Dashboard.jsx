import Card from "./Card"
import CardBlank from "./CardBlank"
import data from '../../utils/data.json'
import {useEffect, useState} from 'react'
import axios from 'axios'
import LOGO from '../../assets/images/logo.png'


function Dashboard() {
	import("./DashBoard.css")
	const handleWorkout = () =>{
		window.location.href = "/workOut1"
	}

	const [month_no, setMonth] = useState(new Date().getMonth() + 1)
	const [blackArr, setblackArr] = useState([])
	const [whiteArr, setwhiteArr] = useState([])
	const [totalActivity, setTotalActivity]= useState(null);
	const [totalDuration, setTotalDuration] = useState(null)
	const [totalNo, setTotalNo] = useState(null)
	
	const {days, start, month} = data[month_no.toString()]

	const handleIncreMonth = ()=>{
		if(month_no<12)
		setMonth(month_no+1)
	}
	const handleDecreMonth = ()=>{
		if(month_no>1)
		setMonth(month_no-1)
	}

	
	function generateActivityArray(daysInMonth, activityObject) {
		const resultArray = new Array(daysInMonth).fill([])

		activityObject.forEach((activity) => {
			const dayIndex = activity.day - 1 // Adjust day index to start from 0
			resultArray[dayIndex] = activity.activities
		})

		return resultArray
	}

	useEffect(() => {
		const getData = async () => {
			await axios
				.post(
					"http://localhost:8000/getActivities",
					{
						month: month,
					},
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				)
				.then(async(res) => {
					const workoutData = res.data.activities;
					if ( await workoutData) {
						setTotalActivity(getMonthCalorie(workoutData, month))
						setTotalDuration(getMonthDuration(workoutData, month))
						setTotalNo(getNoWork(workoutData, month))
						var white = generateActivityArray(days, workoutData)
						setwhiteArr(white)
					}
				})

			var black = []
			for (let i = 1; i < start; i++) {
				black.push(0)
			}
			setblackArr(black)

		}
		getData()
	}, [month])

	const getMonthCalorie = (workoutData, month) => {
		const filteredActivities = workoutData.filter(
			(activity) => activity.month === month
		)

		let totalCalories = 0

		filteredActivities.forEach((activity) => {
			activity.activities.forEach((subActivity) => {
				totalCalories += subActivity.calorie
			})
		})

		return totalCalories
	}

	const getMonthDuration = (workoutData, month) => {
		const filteredActivities = workoutData.filter(
			(activity) => activity.month === month
		)

		let totalCalories = 0

		filteredActivities.forEach((activity) => {
			activity.activities.forEach((subActivity) => {
				totalCalories += subActivity.duration
			})
		})

		return totalCalories
	}
	const getNoWork = (workoutData, month) => {
		const filteredActivities = workoutData.filter(
			(activity) => activity.month === month
		)

		let totalCalories = 0

		filteredActivities.forEach((activity) => {
			activity.activities.forEach(() => {
				totalCalories++;
			})
		})

		return totalCalories
	}
	return (
		<div>
			 <div>
			 <img className="Logo" src={LOGO} alt="LOGO" /> 
             <h2 className="webname pt-4">MyFit MyHealth</h2>
			 </div>
			 <div className="w-full font-new-sans">
			<div className="text-[2rem] font-bold p-4 pt-[7%]">
				Dashboard
				<p className="text-[1.2rem] pt-10">Monthly View</p>
				<div className="w-[8rem] mb-10 bg-red-500 h-1"></div>
			</div>
			<div className="w-full flex justify-center pb-10 mb-20">
				<div className=" border-[0.01rem]  border-black w-[95%] ">
					<div className="w-[90%] mx-auto m-2 flex justify-between items-center pl-2">
						<div className="w-[90%] items-center text-lg font-bold mx-auto flex">
							<div
								onClick={handleDecreMonth}
								className="cursor-pointer w-fit">
								<i className="bx bx-chevron-left bx-lg"></i>
							</div>
							{month.replace(/\b\w/g, (l) => l.toUpperCase())} 2024
							<div
								onClick={handleIncreMonth}
								className="cursor-pointer w-fit">
								<i className="bx bx-chevron-right bx-lg"></i>
							</div>
						</div>
						<div
							onClick={handleWorkout}
							className="bg-gray-500 p-2 rounded-md flex gap-2 h-fit cursor-pointer text-white whitespace-nowrap m-4">
							<i className="bx bx-plus"></i>
							Add Workout
						</div>
					</div>
					<div className="flex gap-[10%] p-[5%] ">
						<div className="w-fit">
							<div className="text-3xl font-bold ">{totalDuration}</div>
							<p className="text-sm text-gray-500 font-bold">Duration (mi)</p>
						</div>
						<div className="w-fit">
							<div className="text-3xl font-bold ">{totalActivity}</div>
							<p className="text-sm text-gray-500 font-bold">Calories (mi)</p>
						</div>
						<div className="w-fit">
							<div className="text-3xl font-bold ">{totalNo}</div>
							<p className="text-sm text-gray-500 font-bold">Workout (mi)</p>
						</div>
					</div>
					<div className="border-4 bg-[#F3F3F3] w-[98%] pb-10 mx-auto border-[#F3F3F3]">
						<div className="mx-auto w-fit ">
							<div className="w-full font-bold flex items-center pl-[2%] gap-[9.5rem]">
								<div className="">Mon</div>
								<div>Tue</div>
								<div>Wed</div>
								<div>Thu</div>
								<div>Fri</div>
								<div>Sat</div>
								<div>Sun</div>
							</div>
						</div>
						<div className="w-full justify-center flex-wrap flex items-center gap-[2.4rem]">
							{blackArr.map((index) => {
								return <CardBlank key={index} />
							})}
							{whiteArr.map((value, index) => {
								return value ? (
									<Card
										activity={value}
										date={index + 1}
									/>
								) : (
									<Card
										activity={[]}
										date={index + 1}
									/>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="h-[150px] bg-black">
			<div className="text-white font-bold text-2xl p-10 ml-10">
				My Fit My Health
			</div>
		</div>
		</div>
		
	)

					}

export default Dashboard