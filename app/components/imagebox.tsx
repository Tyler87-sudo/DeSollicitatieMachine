"use client" 

export default function ImageBox({imglink, text, classNames}: {imglink: string, text?: string, classNames?: string}) {
    return (
        <div className={classNames}>
            <img style={{borderRadius: "16px", borderWidth: "1px", borderColor: "black", height: "80%"}} src={imglink}></img>
        </div>
    )
}