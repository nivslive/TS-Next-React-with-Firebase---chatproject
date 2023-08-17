import { Birthstone, Poppins } from 'next/font/google';
import '../app/globals.css';
import Header from '@/components/Header';

const inter = Poppins({weight: '400', subsets: ['latin']})


const MainLayout = ({children}: any) => {
    return (
        <>
            <Header/>
                <div className={inter.className} style={{padding: 90, height: "100vh", backgroundColor: "#EFEFEF"}}>
                    {children}
                </div>
        </>


    )
}


export default MainLayout