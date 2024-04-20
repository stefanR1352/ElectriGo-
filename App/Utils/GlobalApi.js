
import axios from 'axios'
const BASE_URL="https://places.googleapis.com/v1/places:searchNearby";
const API_KEY="AIzaSyAYUcpQgLWWW9wsZulDvFd-9zv_o4OZ8NU";
const CLERK_API_KEY='pk_test_d2FybS1oZWRnZWhvZy0yMS5jbGVyay5hY2NvdW50cy5kZXYk';
const FIREBASE_API="3ba05a8ebb94e6e7999c66bfec52928437a7c4f2"
const config={
    headers:{
        'Content-Type':'application/json',
        'X-Goog-Api-Key':API_KEY,
        'X-Goog-FieldMask':[
    'places.displayName',
    'places.formattedAddress',
    'places.location',
    'places.evChargeOptions',
    'places.shortFormattedAddress',
    'places.photos','places.id']
    }
}

const NewNearByPlace=(data)=>axios.post(BASE_URL,data,config);

export default{
    NewNearByPlace,
    API_KEY,
    CLERK_API_KEY,
    FIREBASE_API
}
