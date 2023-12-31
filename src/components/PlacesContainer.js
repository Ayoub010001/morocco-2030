import React, { useState } from 'react'
import PlaceSection from './PlaceSection'
import StadiumInfo from './StadiumInfo'



function PlacesContainer({Stadium}) {
    const originalPlaceVisit = Stadium.places;
    const [placesVisit, setPlacesVisit] = useState(originalPlaceVisit);
    const [selectedReligion, setSelectedReligion] = useState("Religion");
    const [selectedCategory, setSelectedCategory] = useState("Categories");
    const [selectedDistance, setSelectedDistance] = useState("Distance");

    const Categories = ["Religious Monument","Architectural Landmark","Garden","Public Square","Shopping","Cultural Attraction","Historical Landmark","Public Square","entertainment","Art","Art Museum","Natural view","Beach"];
    const Religion = ["Islamic","Christian", "Catholic", "Eastern Orthodox Christianity"];
    const Distance = ["From Far to Close","From Close to Far"];


    
    function applyFilters() {
        let filteredPlaces = originalPlaceVisit;
    
        // Apply religion filter
        if (selectedReligion !== "Religion") {
          filteredPlaces = filteredPlaces.filter((place) => place["Religious Affiliation"] === selectedReligion);
        }
    
        // Apply category filter
        if (selectedCategory !== "Categories") {
          filteredPlaces = filteredPlaces.filter((place) => place["category"].includes(selectedCategory));
        }
    
        // Apply distance filter
        if (selectedDistance !== "Distance") {
          filteredPlaces = selectedDistance === "From Close to Far"
            ? filteredPlaces.slice().sort((placeA, placeB) => placeA.distance - placeB.distance)
            : filteredPlaces.slice().sort((placeA, placeB) => placeB.distance - placeA.distance);
        }
    
        setPlacesVisit(filteredPlaces);
      }
    
      function handleChangeReligion(e) {
        setSelectedReligion(e.target.value);
      }
    
      function handleChangeCategories(e) {
        setSelectedCategory(e.target.value);
      }
    
      function handleChangeDistance(e) {
        setSelectedDistance(e.target.value);
      }
    
      return (
        <section className='places--container'>
          <main className='places--content'>
            <StadiumInfo selectedStadium={Stadium} />
    
            <h1>Places To Visit</h1>
            <form>
              <div className='filterContainer'>
              <select className='badge input--Select' value={selectedReligion} onChange={handleChangeReligion}>
    <option value={"Religion"}>Religion</option>
    {Religion.map((religion) => (
      <option key={religion} value={religion}>
        {religion}
      </option>
    ))}
  </select>

  <select className='badge input--Select' value={selectedCategory} onChange={handleChangeCategories}>
    <option value={"Categories"}>Categories</option>
    {Categories.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>

  <select className='badge input--Select' value={selectedDistance} onChange={handleChangeDistance}>
    <option value={"Distance"}>Distance</option>
    {Distance.map((distance) => (
      <option key={distance} value={distance}>
        {distance}
      </option>
    ))}
  </select>
                <button type="button" className="filterButton" onClick={applyFilters}>
                  Apply Filters
                </button>
                <button type="button" className="resetButton" onClick={() => {
                  setSelectedReligion("Religion");
                  setSelectedCategory("Categories");
                  setSelectedDistance("Distance");
                  setPlacesVisit(originalPlaceVisit);
                }}>
                  Reset Filters
                </button>
              </div>
            </form>
            {placesVisit.map((place, index) => (
              <PlaceSection place={place} key={index} />
            ))}
          </main>
        </section>
      );




}
    /*

    const Categories = ["Religious Monument","Architectural Landmark","Garden","Public Square","Shopping","Cultural Attraction","Historical Landmark","Public Square","entertainment","Art","Art Museum","Natural view","Beach"];
    const Religion = ["Islamic","Christian", "Catholic", "Eastern Orthodox Christianity"];
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
                placesVisit.map((place, index)=>{
                    return <PlaceSection place={place} key={index}/>
                })
            }

        </main>
    </section>
  )
}
*/
export default PlacesContainer