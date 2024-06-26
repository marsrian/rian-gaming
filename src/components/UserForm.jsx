import { useState } from "react";
import useProfile from "./useProfile";
import Image from "next/image";
import { quantico } from "@/utils/fonts";
import AddressInputs from "./AddressInputs";
import axios from "axios";

const UserForm = ({ user, onSave }) => {
  const [userName, setUserName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
  const [postalCode, setPostalCode] = useState(user?.postalCode || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");
  const [admin, setAdmin] = useState(user?.admin || false);
  const [loading, setLoading] = useState(false);
  const { data: loggedInUserData } = useProfile();

  async function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=8c7e6715d65ea121c19223b0819e1826`,
        formData
      );
      setImage(response.data.data.url);
    } catch (error) {
      console.error("Error uploading image", error);
    } finally {
      setLoading(false);
    }
  }

  function handleAddressChange(propName, value) {
    if (propName === "phone") setPhone(value);
    if (propName === "streetAddress") setStreetAddress(value);
    if (propName === "postalCode") setPostalCode(value);
    if (propName === "city") setCity(value);
    if (propName === "country") setCountry(value);
  }

  return (
    <div
      className={`${quantico.className} grid grid-cols-1 md:grid-cols-3 gap-6`}
    >
      <div className="col-span-1 p-2">
        {loading ? (
          <p className="text-center text-white text-lg">Loading Image...</p>
        ) : (
          image && (
            <Image
              src={image}
              width={300}
              height={300}
              alt="avatar"
              className="rounded-full mb-1 mx-auto w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
            />
          )
        )}
      </div>
      <form
        className="md:col-span-2"
        onSubmit={(ev) =>
          onSave(ev, {
            image,
            name: userName,
            streetAddress,
            phone,
            city,
            postalCode,
            country,
            admin,
          })
        }
      >
        <div className="flex flex-col mb-2">
          <label className="text-white">Image Upload</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-white">First and Last name</label>
          <input
            type="text"
            id=""
            name=""
            placeholder="First and Last name"
            value={userName}
            onChange={(ev) => setUserName(ev.target.value)}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-white">Email</label>
          <input
            type="email"
            id=""
            name=""
            disabled={true}
            value={user?.email}
            className="border p-2 rounded-md text-gray-300"
          />
        </div>
        <AddressInputs
          addressProps={{
            phone,
            streetAddress,
            postalCode,
            city,
            country,
          }}
          setAddressProps={handleAddressChange}
        />
        {loggedInUserData.admin && (
          <div>
            <label
              className="p-2 inline-flex items-center gap-2 mb-2"
              htmlFor="adminCb"
            >
              <input
                id="adminCb"
                name=""
                type="checkbox"
                className=""
                value={"1"}
                checked={admin}
                onChange={(ev) => setAdmin(ev.target.checked)}
              />
              <span className="text-white">Admin</span>
            </label>
          </div>
        )}

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserForm;