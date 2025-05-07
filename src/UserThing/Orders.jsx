import React from 'react';

const Orders = () => {
    return (
        <div className='quick'>
             <h1 className='text-4xl font-bold pb-5'> Your Orders</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
           
  <table className="table">
    
    {/* head */}
    <thead>
      <tr>
        <th>Order</th>
        <th>Date</th>
        <th>Status</th>
        <th>Total</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>#1357</th>
        <td>March 45, 2020</td>
        <td>Processing</td>
        <td>$125.00</td>
        
      </tr>
      {/* row 2 */}
      <tr>
      <th>#2467</th>
        <td>June 29, 2020</td>
        <td>Completed</td>
        <td>$364.00</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>#2366</th>
        <td>August 02, 2020</td>
        <td>Completed</td>
        <td>$280.00</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Orders;