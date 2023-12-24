import React, { useState } from 'react'
import PlaceSection from './PlaceSection'
import StadiumInfo from './StadiumInfo'



function PlacesContainer({Stadium}) {

    const Categories = ["Religious Monument","Architectural Landmark","Garden","Public Square","Shopping","Cultural Attraction","Historical Landmark","Public Square","entertainment","Art","Art Museum","Natural view","Beach"];
    const Religion = ["Islamic","Christian"];
    const Distance = ["From Far to Close","From Close to Far"];

    // States
    const orginalPlaceVisit = Stadium.places;
    const [placesVisit, setPlacesVisit] = useState(Stadium.places);

    function handleChangeReligion(e){
        const religion = e.target.value;
        console.log(religion);
        setPlacesVisit(()=>{
            if(religion !== "Religion"){
                return orginalPlaceVisit.filter((place)=>{
                    return place["Religious Affiliation"] === religion;
                })
            }else{
                return orginalPlaceVisit;
            }
        })
    }

    function handleChangeCategories(e){
        const category = e.target.value;
        setPlacesVisit(()=>{
            if(category !== "Categories"){
                return orginalPlaceVisit.filter((place)=>{
                    return place["category"].includes(category);
                })
            }else{
                return orginalPlaceVisit;
            }
        })
    }

    function handleChangeDistance(e){
        const distance = e.target.value;
        console.log(distance)
        setPlacesVisit((prevPlaces )=>{
            if(distance !== "Distance"){
                if(distance === "From Close to Far"){
                    return prevPlaces.slice().sort((placeA , placeB)=>{
                        return placeA.distance - placeB.distance;
                    })
                }else{
                    return prevPlaces.slice().sort((placeA , placeB)=>{
                        return placeB.distance - placeA.distance;
                    })
                }
            }else{
                return orginalPlaceVisit;
            }
        })
    }

  return (
    <section className='places--container'>
        <main className='places--content'>
            <StadiumInfo selectedStadium={Stadium}/>

            <h1>Places To Visite</h1>
            <form>
                <div className='filterContainer'>
                    <select className='badge input--Select' onChange={handleChangeReligion}>
                        <option value={"Religion"}>Religion</option>
                        {
                            Religion.map((religion)=>{
                                return <option value={religion}>{religion}</option>
                            })
                        }
                    </select>
                    <select className='badge input--Select' onChange={handleChangeCategories}>
                        <option value={"Categories"}>Categories</option>
                        {
                            Categories.map((category)=>{
                                return <option value={category}>{category}</option>
                            })
                        }
                    </select>
                    <select className='badge input--Select' onChange={handleChangeDistance}>
                        <option value={"Distance"}>Distance</option>
                        {
                            Distance.map((distance)=>{
                                return <option value={distance}>{distance}</option>
                            })
                        }
                    </select>
                </div>
            </form>
            {
                placesVisit.map((place)=>{
                    return <PlaceSection place={place}/>
                })
            }

        </main>
    </section>
  )
}

export default PlacesContainer