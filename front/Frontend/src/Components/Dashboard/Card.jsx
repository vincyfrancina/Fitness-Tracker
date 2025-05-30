import Activity from "../../Activity"

function Card({ activity , date }) {
		const handleWorkout = () => {
			window.location.href = "/workOut1"
		}
	return (
		<div className="w-[9rem] group">
			<div className="w-[95%] group-hover:border-red-500 group-hover:border-2 h-[150px]  p-2 bg-white group m-1">
				<div className="text-sm relative pl-[90%]">{date}</div>
				{activity.map((act, index) => {
					return (
						<Activity
							key={index}
							calorie={act.calorie}
							activity={act.activity}
						/>
					)
				})}
				<div onClick={handleWorkout}>
					<div className="p-1 hidden group-hover:block px-12 mt-2 cursor-pointer whitespace-nowrap transform transition-transform duration-500 ease-in text-sm w-fit mx-auto  rounded-md bg-gray-400 text-black">
						<i className="bx bx-plus bx-xs"></i>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card