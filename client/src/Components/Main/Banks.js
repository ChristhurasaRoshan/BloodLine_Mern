import React, { useState, useEffect } from 'react'
import data from "../../assets/data.json";
import axios from "../Api";

const Banks = () => {

    const [Province, setProvince] = useState(0);
    const [district, setDistrict] = useState(0);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        axios.get(`/bank/allBanks/${data.Provinces[Province].Province}/${data.Provinces[Province].districts[district]}`).then((r) => { setFiltered(r.data); }).catch((e) => alert("Something went wrong"));
    }, [Province, district])

    return (
        <div className='px-7'>
            <table cellPadding={7}>
                <tr>
                    <td><label for="Province" className="font-semibold  leading-8">Province:<font color="red">*</font></label>
                        <select name="Province" id="Province" onChange={(e) => { setProvince(e.target.value); setDistrict(0); }} className="w-full p-3 text-md border border-silver rounded">
                            {
                                data.Provinces.map((e, i) => <option value={i} selected={Province === i}>{e.Province}</option>)
                            }
                        </select>
                    </td>
                    <td><label for="district" className="font-semibold  leading-8">District:<font color="red">*</font></label>
                        <select name="district" id="district" onChange={(e) => { setDistrict(e.target.value); }} className="w-full p-3 text-md border border-silver rounded">
                            {
                                data.Provinces[Province].districts.map((e, i) => <option value={i} selected={district === i}>{e}</option>)
                            }
                        </select>
                    </td>
                </tr>
            </table>
            <br />
            <table className='w-full text-center'>
                <thead>
                    <th className="p-3 text-md border border-silver rounded">Blood Bank Name</th>
                    <th className="p-3 text-md border border-silver rounded">Parent Hospital</th>
                    <th className="p-3 text-md border border-silver rounded">Category</th>
                    <th className="p-3 text-md border border-silver rounded">Province</th>
                    <th className="p-3 text-md border border-silver rounded">District</th>
                    <th className="p-3 text-md border border-silver rounded">Address</th>
                    <th className="p-3 text-md border border-silver rounded">Contact</th>
                    <th className="p-3 text-md border border-silver rounded">Website</th>
                    <th className="p-3 text-md border border-silver rounded">Email</th>
                </thead>
                <tbody>
                    {
                        filtered.map((e) =>
                            <tr>
                                <td className="p-3 text-md border border-silver rounded">{e.name}</td>
                                <td className="p-3 text-md border border-silver rounded">{e.hospital}</td>
                                <td className="p-3 text-md border border-silver rounded">{e.category}</td>
                                <td className="p-3 text-md border border-silver rounded">{e.Province}</td>
                                <td className="p-3 text-md border border-silver rounded">{e.district}</td>
                                <td className="p-3 text-md border border-silver rounded">{e.address}</td>
                                <td className="p-3 text-md border border-silver rounded">{e.phone}</td>
                                <td className="p-3 text-md border border-silver rounded">{e.website}</td>
                                <td className="p-3 text-md border border-silver rounded">{e.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Banks