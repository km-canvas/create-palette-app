import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const DraggableColorList = SortableContainer( ({colors, removeColor, hexShowing, open}) => {
	return (
		<div style={{height: "100%"}} >
			{colors.map((colorObj, idx) => (
				<DraggableColorBox
					open={open} 
					hexShowing={hexShowing}
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
