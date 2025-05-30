import Card from "./Card"
import CardBlank from "./CardBlank"

function Dashboard() {
  return (
		<div className="w-full font-new-sans">
			<div className="text-[2rem] font-bold p-4 pt-[7%]">
				Dashboard
				<p className="text-[1.2rem] pt-10">Monthly View</p>
				<div className="w-[8rem] mb-10 bg-red-500 h-1"></div>
			</div>
			<div className="w-full flex justify-center mb-20">
                
				<div className=" border-[0.01rem]  border-black w-[95%] ">
					<div className="w-[90%] mx-auto m-2 flex justify-between items-center pl-2">
						<div className="w-[90%] text-lg font-bold mx-auto">March 2024</div>
						<div className="bg-gray-500 p-2 rounded-md flex gap-2 h-fit cursor-pointer text-white whitespace-nowrap m-4">
							<i className="bx bx-plus"></i>
							Add Workout
						</div>
					</div>
					<div className="flex gap-[10%] p-[5%] ">
						<div className="w-fit">
							<div className="text-3xl font-bold ">2.00</div>
							<p className="text-sm text-gray-500 font-bold">Distance (mi)</p>
						</div>
						<div className="w-fit">
							<div className="text-3xl font-bold ">2.00:00</div>
							<p className="text-sm text-gray-500 font-bold">Duration (mi)</p>
						</div>
						<div className="w-fit">
							<div className="text-3xl font-bold ">190</div>
							<p className="text-sm text-gray-500 font-bold">Calories (mi)</p>
						</div>
						<div className="w-fit">
							<div className="text-3xl font-bold ">1</div>
							<p className="text-sm text-gray-500 font-bold">Workout (mi)</p>
						</div>
					</div>
					<div className="border-4 bg-[#F3F3F3] w-[98%] mx-auto border-[#F3F3F3]">
						<div className="mx-auto">
							<div className="w-full font-bold flex items-center pl-[2%] gap-[8rem]">
								<div className="">Mon</div>
								<div>Tue</div>
								<div>Wed</div>
								<div>Thu</div>
								<div>Fri</div>
								<div>Sat</div>
								<div>Sun</div>
							</div>
						</div>
						<div className="w-full justify-center flex-wrap flex items-center gap-[0.3rem]">
							<CardBlank />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard