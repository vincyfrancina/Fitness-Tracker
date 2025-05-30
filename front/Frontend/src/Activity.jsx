
function Activity({calorie, activity}) {
  return (
		<div className="p-1 w-fit pre px-4 mt-1  text-sm mx-auto flex rounded-md bg-gray-400 text-black">
			<div>
				<b>{activity}</b>{" "}
			</div>
			<div className="whitespace-nowrap">
				<p>{calorie} cal</p>
			</div>
		</div>
	)
}

export default Activity