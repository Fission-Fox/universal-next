
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import {ClerkProvider} from "@clerk/nextjs";
import agent from "@/api/agent";

export const metadata = {
  title: 'Universal Motors - Japanese Used Cars For Sale. Shipping Globally! ',
  description: 'Japanese Used Cars For Sale. Shipping Globally! ',
}


const GetBodyTypes = async () => {
  return await agent.LoadData.bodyTypeList();// db.tblBodyTypes.findMany({where: {isActive:true}});
}
const GetLocations = async () => {
  return await agent.LoadData.countryList();//return await prisma.tblMasterCountry.findMany({where: {IsActive:true}} );
}
const GetCarMakes = async () => {
  return await  agent.LoadData.carMakeList();//return await prisma.tblMakes.findMany({where: {isActive:true}} );
}
const GetStockCount = async () => {
  return await agent.LoadData.stockCount();
  //db.tblMasterCountry.findMany({where: {IsActive:true}} );
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bodyTypes = await GetBodyTypes();
  const locations = await GetLocations();
  const makes = await GetCarMakes();
  const stockCount:number = await GetStockCount();

  return (

    <>
      <ClerkProvider>

        <Header bodyTypes={bodyTypes} stockCount={stockCount} locations={locations} makes={makes}/>
        <section className="sidebar-menu">
          <div className="container-fluid">
            <div className="row">
              <Sidebar locations={locations} makes={makes}/>
              {children}
            </div>
          </div>
        </section>
        <Footer bodyTypes={bodyTypes} locations={locations} makes={makes}/>

        </ClerkProvider>
    </>



  )
}
