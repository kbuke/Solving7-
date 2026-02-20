import { AdminPopUpContents } from "../../../../Component/AdminPopUpContents"
import { EmployeeImg } from "../../../../Component/EmployeeImg"

export function AdminEmployees({
    allEmployees,
    setSelectedInstance, 
    setAction
}){

    return allEmployees?.map((employee, index) => {
        const employeeName = employee?.name
        const employeeImg = EmployeeImg(employeeName)
        const employeeRole = employee?.position 
        const employeeInfo = employee?.intro 

        return(
            <AdminPopUpContents 
                key={index}
                instance={employee}
                instanceImg={employeeImg}
                instanceName={employeeName}
                instanceText={[
                    {
                        title: "Role",
                        text: employeeRole
                    },

                    {
                        title: "Info",
                        text: employeeInfo
                    }
                ]}
                setSelectedInstance={setSelectedInstance}
                setAction={setAction}
            />
        )
    })
}