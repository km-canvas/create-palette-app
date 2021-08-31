import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const DraggableColorList = SortableContainer( ({colors, removeColor}) => {
	return (
		<div style={{height: "100%"}} >
			{colors.map((colorObj, idx) => (
				<DraggableColorBox
					index={idx} 
					color={colorObj.color} 
					name={colorObj.name}
					key={colorObj.name}
					handleDelete={() => removeColor(colorObj.name)} 
				/>
			))}
		</div>
	)
})

export default DraggableColorList
