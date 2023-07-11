import React from 'react'
import {Carousel, HomePageCard, CarouselCategory} from './'

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        Testing
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
            <HomePageCard title={"We have a surprise for you"}
            img={"../images/home_grid_1.jpg"}
            link={"See terms and conditions"}/>

            <HomePageCard title={"Watch the Rings of Power"}
            img={"../images/home_grid_2.jpg"}
            link={"Start Streaming now"}/>

            <HomePageCard title={"Unlimited streaming"}
            img={"../images/home_grid_3.jpg"}
            link={"Find out more"}/>

            <HomePageCard title={"More titles to explore"}
            img={"../images/home_grid_4.jpg"}
            link={"Browse Kindle Unlimited"}/>

            <HomePageCard title={"Shop pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"See more"}/>

            <HomePageCard title={"Spring sale"}
            img={"../images/home_grid_6.jpg"}
            link={"See the deals"}/>

            <HomePageCard title={"Echo Buds"}
            img={"../images/home_grid_7.jpg"}
            link={"See more"}/>

            <HomePageCard title={"Family plan: 3 months free"}
            img={"../images/home_grid_8.jpg"}
            link={"Learn more"}/>

            <div className="m-3 pt-8">
                <img  className="xl:hidden" src="../images/banner_image_2.jpg" alt=""/>
            </div>

        </div>

        <CarouselCategory />
      </div>
    </div>
  )
}

export default HomePage