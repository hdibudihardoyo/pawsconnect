import React from "react";

const cakes = ['Empal Gentong', 'Jambal Roti', 'Emping', 'Docang' , 'Nasi Jamblang'];


const Mapping = () => {
	return (
		<div>
			<h1>Mapping</h1>
			<ul>
				{cakes.map((cake, index) =>
				<li key={index}>
					{cake === 'Nasi Jamblang' ? `${cake} The Most Delicius` : `${cake} I Dislike`}
				</li>
				)}
			</ul>
		</div>
			)
}


				/* <h4>Percobaan Mapping</h4>
				<div>
					{items.map((item, index) => (
					//  <p key={index}>{item}</p>))}
					 <p key={item.id}>{item.name}</p>))}
				</div> */

export default Mapping;