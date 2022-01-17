import React from "react";

const International = () => {
  const { globalMobileNo, setGlobalMobileNo } = useState(null);
  useEffect(() => {}, [globalMobileNo]);
  if (globalMobileNo)
    return (
      <>
        <International
          userHeader={false}
          setGlobalMobileNo={setGlobalMobileNo}
          {...props}
        />
      </>
    );
  else
    return (
      <>
        <InternationalSignUp
          userHeader={false}
          globalMobileNo={globalMobileNo}
          {...props}
        />
      </>
    );
};

export default International;
