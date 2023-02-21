import axios from 'axios'
import {initialize} from './index'

const A = () => {
    const queries = initialize(axios)



    const {data} = queries.queries.useListPets()
    data
}