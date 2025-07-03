import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { fetchProfile, updateProfileMock } from "../../api/api";
import { ProfileState } from "../../Types/types";

const Profile = () => {

  const dispatch:AppDispatch=useDispatch()
  const state=useSelector((state:RootState)=>state.profile.profile)
  const user=useSelector((state:RootState)=>state.auth.user)
  const [name,setName]=useState("")
  const [lastname,setLastname]=useState("")
  const [email,setEmail]=useState("")
  const [url,setUrl]=useState("")
  const [company,setCompany]=useState("")
  const [tel,setTel]=useState("")
  const [id,setId]=useState("")
  const [profile,setProfile]=useState<ProfileState[]>([])


 function getProduct(){
  const res=state.filter((el)=>el.email===user?el:'')
  res.map((el)=>(
    setId(el.id),
    setName(el.name),
    setLastname(el.lastname),
    setUrl(el.url),
    setEmail(el.email),
    setCompany(el.company),
    setTel(el.tel)
  ))
  console.log(res);
  setProfile(res)
  // setId(res.id)
 }

 function SaveSubmit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault()
const newPro={
  name,
  lastname,
  email,
  url,
  company,
  tel,
  id
}
console.log(newPro);

dispatch(updateProfileMock(newPro))

 }


console.log(id);

useEffect(()=>{
  getProduct()
  dispatch(fetchProfile())
},[dispatch])

  return (
    <>
      <Header />
      <div className="container">
        {profile.map((el:ProfileState)=>(
          <form 
          onSubmit={SaveSubmit}
          key={el.id}>
          <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',
            flexDirection:'column',textAlign:'center',gap:'20px',padding:'20px 0'
          }}  >

            <div>
              <label
              style={{color:'black'}}
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Имя
              </label>
              <input
              onChange={(e)=>setName(e.target.value)}
              defaultValue={el.name}
              // value={el.name}
              style={{padding:'17px 10px',outline:'none',width:'600px'}}
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
              style={{color:'black'}}
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Фамилия
              </label>
              <input
              onChange={(e)=>setLastname(e.target.value)}
              // value={el.lastname}

              defaultValue={el.lastname}
              style={{padding:'17px 10px',outline:'none',width:'600px'}}
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label
              style={{color:'black'}}
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Компания
              </label>
              <input
              onChange={(e)=>setCompany(e.target.value)}
              defaultValue={el.company}
              style={{padding:'17px 10px',outline:'none',width:'600px'}}
                type="text"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Flowbite"
                required
              />
            </div>
            <div>
              <label
              style={{color:'black'}}
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Телефон 
              </label>
              <input
              onChange={(e)=>setTel(e.target.value)}
              defaultValue={el.tel}
              style={{padding:'17px 10px',outline:'none',width:'600px'}}
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                required
              />
            </div>
            <div>
              <label
              style={{color:'black'}}
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Фото URL
              </label>
              <input
              onChange={(e)=>setUrl(e.target.value)}
              defaultValue={el.url}
              style={{padding:'17px 10px',outline:'none',width:'600px'}}
                // type="url"
                id="website"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="flowbite.com"
                required
              />
            </div>
          <div className="mb-6">
            <label
            style={{color:'black'}}
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              // onChange={(e)=>setEmail(e.target.value)}
              value={el.email}
            style={{padding:'17px 10px',outline:'none',width:'600px'}}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div className="flex items-start mb-6">
           <button type="submit" style={{padding:'5px 15px'}} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Сохранить</button>
          </div>
          
          </div>
          
        </form>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Profile;
