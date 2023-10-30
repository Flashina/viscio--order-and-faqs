import React from 'react'
import OrderOption from '../Components/OrderOption'

const Order = () => {
  return (
    <>
     <div className="mb-40">
        <div className="bg-green-800 border mt-40 mr-40 ml-40 text-white text-sm p-10 rounded-2xl md:text-xl">
          <ul className="flex items-center justify-between">
            <li className="font-bold">Pick Up Address</li>
            <li className="font-bold">Drop Off Address</li>
            <li className="font-bold">Delivery Mode</li>
            <li className="font-bold">Item</li>
          </ul>
        </div>

        <OrderOption
          address="First Gate, Iyana Iba"
          address2=" Overland Airways Office, Beside Concord, Aero Road, Muritala
        Mohamed Airport Domestic Terminal, Ikeja"
          mode="Bike"
          item="Wig"
        />

        <OrderOption
          address="No 3 Lahunsi Street, Iyana Odo, Iyana Ipaja"
          address2=" 4, Lawal Street, Fadeyi (Front Of The New Palace Of King Of
          Igbobisabe)"
          mode="Bike"
          item="Cloth"
        />

        <OrderOption
          address="Shop 1 No 78 Koloba Road, Alaja Ayobo, Ipaja Lagos"
          address2=" 3, Dele Ashiru Street Ire-Akari Estate Isolo, Lagos"
          mode="Bike"
          item="Flower Bouquet"
        />

        <OrderOption
          address=" Computer Village, Lagos, Nigeria"
          address2="301,Herbert Maculay Way,Opposite Total Filling Station."
          mode="Bike"
          item="Jewelry"
        />

        <OrderOption
          address="IKOTUN Motor Park"
          address2=" No 37, Adeyinka Street Agodo Egbe ,IKOTUN"
          mode="Bike"
          item="Small Box"
        />

        <OrderOption
          address="Sky Mall"
          address2="No 6, Olaide Benson Street, Onigbongbo Maryland, Lagos"
          mode="Bike"
          item="Hair"
        />

        <OrderOption
          address="26 Akinpelumi Street, Ikosi Ketu, Lagos, Nigeria"
          address2="Ojota Garage"
          mode="Bike"
          item="Gadgets"
        />

        <OrderOption
          address="Enyo Filling Station Ojota Bus Stop"
          address2="SS COURT MINI ESTATE, Chevron ,Lagos, Nigeria"
          mode="Bike"
          item="Clothes"
        />

        <OrderOption
          address="Happy Land Estate, Lekki - Epe Expressway, Sangotedo, Nigeria"
          address2="Evercare Hospital Lekki, Bisola Durosinmi Etti Drive, Lagos,
        Nigeria"
          mode="Bike"
          item="Fabric"
        />
      </div>

    </>
  )
}

export default Order