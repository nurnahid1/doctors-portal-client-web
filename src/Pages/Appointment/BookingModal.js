import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({date, treatment, setTreatment}) => {
    const {name, slots} = treatment;

  const handleBooking = event =>{
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    
    // to close the modal
    setTreatment(null);
  }

    return (
        <div>
<input type="checkbox" id="BookingModal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label htmlFor="BookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg mb-3 text-secondary">{name}</h3>
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
    <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
    
  <select name='slot' className="select select-bordered w-full max-w-xs">
    {
      slots.map(slot=> <option>{slot}</option>)
    }
  </select>

    <input type="text" name="name" placeholder="your name" className="input input-bordered w-full max-w-xs" />
    <input type="email" name="email" placeholder="your email" className="input input-bordered w-full max-w-xs" />
    <input type="text" name="phone" placeholder="number" className="input input-bordered w-full max-w-xs" />
    <input type="submit" value="submit" className="btn btn-primary w-full max-w-xs" />
    </form>
  </div>
</div>
        </div>
    );
};

export default BookingModal;