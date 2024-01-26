import React, { useState } from 'react'
import MultiSelect from '../components/MultiSelect'
import CheckBox from '../components/CheckBox'

const Filters = () => {
    const [selectedExperiances, setSelectedExperiances] = useState([])
    const [selectedWorkplaces, setSelectedWorkplaces] = useState([])
    const [selectedCommitment, setSelectedCommitment] = useState([])
    const [selectedContract, setSelectedContract] = useState([])
    const [selectedDegree, setSelectedDegree] = useState([])
    const [selectedPublishDate, setSelectedPublishDate] = useState([])

    const experianceOptions = [
        {id: 'internship', name: 'Internship'},
        {id: 'apprenticeship', name: 'Apprenticeship'},
        {id: 'freshgrad', name: 'FreshGrad'},
        {id: 'associate', name: 'Entry & Associate'},
        {id: 'mid', name: 'Mid-Level'},
        {id: 'senior', name: 'Senior Level'},
        {id: 'staff', name: 'Staff Level'}, 
        {id: 'director', name: 'Director'},
        {id: 'executive', name: 'Executive'},
    ]

    const workplaceOptions = [
        {id: 'remote', name: 'Remote'},
        {id: 'onsite', name: 'On-Site'},
        {id: 'hybrid', name: 'Hybrid'},
    ]

    const commitmentOptions = [
        {id: 'fulltime', name: 'Full-Time'},
        {id: 'parttime', name: 'Part-Time'}
    ]

    const contractOptions = [
        {id: 'temporary', name: 'Temporary'},
        {id: 'permanent', name: 'Permanent'},
    ]

    const degreeOptions = [
        {id: 'bachelor', name: 'Bachelor'},
        {id: 'master', name: 'Master'}, 
        {id: 'phd', name: 'PhD'}, 
        {id: 'diploma', name: 'Diploma'},
        {id: 'none', name: 'No Degree Required'}
    ]

    const publishDateOptions = [
        {id: 1, name: 'Last 24 hours'},
        {id: 7, name: 'Last 7 days'},
        {id: 15, name: 'Last 15 days'},
        {id: 30, name: 'Last 30 days'},
        {id: 60, name: 'Last 60 days'},
    ]

    const [visaSponsorship, setVisaSponsorship] = useState(false)
    const [relocationSupport, setRelocationSupport] = useState(false)
    const [remoteFromAnywhere, setRemoteFromAnywhere] = useState(false)

  return (
    <>
        <MultiSelect options={experianceOptions} setSelectedOptions={setSelectedExperiances} placeholder='Experience' />
        <MultiSelect options={workplaceOptions} setSelectedOptions={setSelectedWorkplaces} placeholder='Workplace Type'/>
        <MultiSelect options={commitmentOptions} setSelectedOptions={setSelectedCommitment} placeholder='Commitment'/>
        <MultiSelect options={contractOptions} setSelectedOptions={setSelectedContract} placeholder='Contract'/>
        <MultiSelect options={degreeOptions} setSelectedOptions={setSelectedDegree} placeholder='Degree'/>
        <MultiSelect options={publishDateOptions} setSelectedOptions={setSelectedPublishDate} placeholder='Published Date'/>
        <div>
            <CheckBox label="Visa Sponsorship" setSelected={setVisaSponsorship} />
            <CheckBox label="Relocation Support" setSelected={setRelocationSupport} />
            <CheckBox label="Remote From Anywhere" setSelected={setRemoteFromAnywhere} />
        </div>
    </>
  )
}

export default Filters