import { useState } from "react";
import useProfile from "./useProfile";
import Image from "next/image";
import { quantico } from "@/utils/fonts";
import AddressInputs from "./AddressInputs";

const UserForm = ({ user, onSave }) => {
  const [userName, setUserName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
  const [postalCode, setPostalCode] = useState(user?.postalCode || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");
  const [admin, setAdmin] = useState(user?.admin || false);
  const { data: loggedInUserData } = useProfile();

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
        {user?.image && (
          <Image
            src={user?.image}
            width={300}
            height={300}
            alt="avatar"
            className="rounded-full mb-1 mx-auto w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
          />
          // TODO: Update Image:
          // <label>
          //   <input
          //     type="file"
          //     className="hidden"
          //     // onChange={handleFileChange}
          //   />
          //   <span className="border rounded-lg p-2 block text-center cursor-pointer">
          //     Edit
          //   </span>
          // </label>
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
            type="text"
            id=""
            name=""
            placeholder="Image Link"
            value={image}
            onChange={(ev) => setImage(ev.target.value)}
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
