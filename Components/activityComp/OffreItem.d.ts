import React from 'react'

declare const OffreItem: React.FC<{
  type: "delevering" | "requestFound" |"waitingRequest" |"finished",
  reciept_ID ,
  price,
  currency,
  reminingTime,
  here :true | false ,
  num_request,
  showDeleveryReq,
  showFinishedModal,
  hundlePause,
  editReciept ;
}>;

export default OffreItem;