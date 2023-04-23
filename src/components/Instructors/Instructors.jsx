import React from "react";
import "./Instructors.css";

const Instructors = () => {
	return (
		<div className='instructors'>
			<p className='instructors-heading'>Instructors Data</p>
			<div className='instructors-data'>
				<div className='a-user'>
					<img
						src='https://cdn-icons-png.flaticon.com/512/306/306812.png'
						alt='avatar'
					/>
					<p>Instructor</p>
				</div>
			</div>
		</div>
	);
};

export default Instructors;
