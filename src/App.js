import './App.css';
import Layout from "./components/layout/Layout";
import {Route, Routes} from "react-router";
import Popular from "./container/popular/Popular";
import TopRated from "./container/topRated/TopRated";
import UpComing from "./container/upComing/UpComing";
import Details from "./container/details/Details";
import Person from "./container/person/Person";
import {useTranslation,initReactI18next} from "react-i18next";
import i18n from "./i18n/I18n"

function App() {

    const {t} = useTranslation()

    function changeLng(lng) {
        i18n.changeLanguage(lng)
    }



    return (


        <Layout>

            <Routes>
                <Route path="/" element={<div>

                    <h2>{t('Welcome')}</h2>

                    <div>
                        <button onClick={()=>changeLng('en')}>EN</button>
                    </div>
                    <div>
                        <button onClick={()=>changeLng('ru')}>RU</button>
                    </div>


                </div>}/>
                <Route path="/popular" element={<Popular/>}/>
                <Route path="/top_rated" element={<TopRated/>}/>
                <Route path="/up_comimg" element={<UpComing/>}/>
                <Route path="/details/:id" element={<Details/>}/>
                <Route path="/person/:id" element={<Person/>}/>

            </Routes>
        </Layout>


    );
}

export default App;
