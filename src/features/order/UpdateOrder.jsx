import React from 'react'
import Button from '../../ui/Button'
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';




const UpdateOrder = () => {
    const fetcher = useFetcher();
  return (

/*fetcher.Form is a component that will be used to update the order 
 status but not navigated to the next page*/
   <fetcher.Form method="PATCH" className='text-right'>
   <Button  type="primary">Make priority</Button>
   </fetcher.Form>
  )
}

export default UpdateOrder

export async function action({request, params}){
    const data={priority: true}
    await updateOrder(params.orderId, data)
    return null
}