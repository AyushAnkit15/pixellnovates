import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react"
import Montserrat from '../Montserrat-Bold.ttf'
const Cards = ({prompt , img}) => {
  
    return (
        <Card  isHoverable  isBlurred className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">PIXELLNOVATE</p>
            <p className="text-default-500 text-lg   font-montserrat">{prompt}</p>
            <h4 className="font-bold text-large"></h4>
          </CardHeader>
         
          <CardBody className="overflow-visible py-2">
          <Image
          removeWrapper
              alt="Card background"
              className="object-cover rounded-xl"
              src={img}
              width={270}
            />
          </CardBody>
          
        </Card>
      );
  
}

export default Cards