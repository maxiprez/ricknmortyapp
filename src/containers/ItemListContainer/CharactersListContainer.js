import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharactersListContainer.css';
import CharacterCard from '../../components/Card/CharacterCard';
import Input from '../../components/Input/Input';
import CustomSelect from '../../components/Select/CustomSelect';
import NextPrevButtons from '../../components/NextPrevButtons/NextPrevButtons';
import Radio from '../../components/RadioButtons/RadioButtons';

export default function CharactersListContainer() {
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/')
    const [info, setInfo] = useState({})
    const [results, setResults] = useState([])
    const [search, setSearch] = useState('')
    const [selectedGender, setSelectedGender] = useState('')
    const [page, setPage] = useState(1)
    const [selectedStatus, setSelectedStatus] = useState({
        checked: ''
    })
    

    const options=[
        {label: 'All', value:''},
        {label: 'Male', value:'male'},
        {label: 'Female', value:'female'},
        {label: 'Unknown', value:'unknown'},
        {label: 'Genderless', value:'genderless'},
    ]

useEffect (() =>{
  
    axios.get(`${url}?page=${page}&name=${search}&gender=${selectedGender}&status=${selectedStatus.checked}`)
    .then((result)=>{
        console.log(result)
        setInfo(result.data.info)
        setResults(result.data.results)
    })
    .catch((error)=>{
        console.log(error)
        setPage(1)
    })
   
}, [search, page, selectedGender, selectedStatus.checked]);

useEffect (() => {
console.log('url: ', url)
console.log('info: ', info)
console.log('results: ', results)
console.log('search:', search)
console.log('gender:', selectedGender)

}, [url, info, results, search, selectedGender, selectedStatus.checked])

function onChange (e){
    setSearch(e.target.value);
}


function onChangeSelect(options){
    setSelectedGender(options.value);
}

const nextHandler = (event) => {
    event.preventDefault()
    if(page < info.pages){
        setPage(page + 1)
    } else{
        setPage(1)
    }
}

const prevHandler = (event) => {
    event.preventDefault()
    if(page > 1){
        setPage(page - 1)
    } else{
        setPage(info.pages)
    }
}

function handleChange(event){
    setSelectedStatus({
        checked: event.target.value
        })
    }


    return (
        <> 
            <div>
                <NextPrevButtons prev={prevHandler} next={nextHandler} page={page} infoPages={info.pages} infoTotalCount={info.count} />
            </div>
            <div className="inputs-container">
                <Radio handleChange={handleChange} selectedStatus={selectedStatus} />
                <Input onChangeInput={onChange} 
                            searchInput={search}
                        />
                 <CustomSelect options={options} onChangeSelect={onChangeSelect} defaultValue={options[0]}/>  
            </div>
            <div className="container">
                 {
                    results.map((result, index) => (
                        <>
                          <CharacterCard key={index} data={result} />
                        </>
                    ))                      
                } 
            </div>
            <div>
                <NextPrevButtons prev={prevHandler} next={nextHandler} page={page} infoPages={info.pages} infoTotalCount={info.count}/>
            </div>
    </>
    )
}
