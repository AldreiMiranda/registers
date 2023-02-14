import React from "react"

interface Props {
  title?: string;
  subTitle?: string;
  classes?: string;
  children: React.ReactNode
}

const PageWrapper = ({ classes, title, subTitle, children }: Props) => {
  return (
    <div className={`flex flex-col mt-10 ${classes}`}>
      {Boolean(title) && (<h3 className={`font-semibold text-3xl text-gray-600 ${Boolean(subTitle) ? '' : 'mb-10'}`}>{title}</h3>)}
      {Boolean(subTitle) && (<p className="font-semibold text-body text-gray-600 mb-10">{subTitle}</p>)}
      {children}
    </div>
  )
}

export default PageWrapper
