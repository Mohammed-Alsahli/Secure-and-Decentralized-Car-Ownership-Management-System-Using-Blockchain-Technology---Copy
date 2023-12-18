import React from "react";
import {
  Home,
  RegisterAccident,
  RegisterCar,
  SearchPage,
  ShowAllAccident,
  ViewFunPage,
  AfterRegister,
  ViewGovermentside,
  MessageGovernoment,
  Verify,
} from "./components/index";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { WalletProvider } from "./Context/UseContext";
import SearchPageUser from "./components/SearchPageUser";

const App = () => {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewfunpage" element={<ViewFunPage />} />
          <Route path="/registeraccident" element={<RegisterAccident />} />
          <Route path="/registercar" element={<RegisterCar />} />
          <Route path="/searchpage" element={<SearchPageUser />} />
          <Route path="/searchGov" element={<SearchPage />} />
          <Route path="/showallaccident" element={<ShowAllAccident />} />
          <Route path="/afterregister" element={<AfterRegister />} />
          <Route path="/viewgovermentside" element={<ViewGovermentside />} />
          <Route path="/registeraccident" element={<RegisterAccident />} />
          <Route path="/MessageGovernoment" element={<MessageGovernoment />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  );
};

export default App;
