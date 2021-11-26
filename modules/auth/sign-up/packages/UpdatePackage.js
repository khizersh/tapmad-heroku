import React from 'react'
import { transparentBox, upgradeIcon } from '../../../../services/imagesLink'

const UpdatePackage = ({currentPackage}) => {
    return (
        <div className="row">
        <div className="col-12">
          <div className="mb-4">
            <h5 className="font-large text-white">
              <img src={transparentBox} />
              <span className="pl-2">Current Pack</span>
            </h5>
          </div>
        </div>
        <div className="col-12">
          <div className="rounded-lg bg-green-light text-center py-2">
            <h3>{currentPackage?.PackageName}</h3>
            <span className="text-grey">{currentPackage?.PaymentMethod}</span>
            <span className="text-grey">
              {currentPackage?.CurrentPackagePrice}
            </span>
          </div>
        </div>

        <div className="col-12 mt-4">
          <p>
            <img src={upgradeIcon} width={"22"} />{" "}
            <span className="pl-2"> Upgrade to:</span>{" "}
          </p>
        </div>
      </div>
    )
}

export default UpdatePackage
