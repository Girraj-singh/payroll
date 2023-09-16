import React, { useState } from 'react'
import AddEmployeecss from './AddEmployee.module.scss'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import AddHomeTwoToneIcon from '@mui/icons-material/AddHomeTwoTone';
import PersonPinCircleTwoToneIcon from '@mui/icons-material/PersonPinCircleTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import { IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';



const AddEmployee = () => {
    const [photo, setPhoto] = useState();
    const [showImage, setShowImage] = useState(false)
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);


    const handleEmployeePhoto = (event) => {
        setShowImage(true)
        console.log(event.target.files[0])
        setPhoto(URL.createObjectURL(event.target.files[0]))
    }
    return (
        <div className={AddEmployeecss.body}>
            <div className={AddEmployeecss.mainHeading}>Add Employee</div>
            <div className={AddEmployeecss.boxContainer}>
                <div className={AddEmployeecss.insideBox}>
                    {/* Personal details  */}
                    <div className={AddEmployeecss.box}>
                        <div className={AddEmployeecss.boxHading}>
                            Personal Details
                            <div><hr style={{ color: 'blue', height: 2, backgroundColor: 'blue' }}></hr></div>
                        </div>

                        <div><TextField required fullWidth size='small' label="Name" variant="outlined" InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle style={{ color: 'skyblue' }} />
                                </InputAdornment>
                            ),
                        }} /></div>
                        <div><TextField required fullWidth size='small' label="Father Name" variant="outlined" InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle style={{ color: 'skyblue' }} />
                                </InputAdornment>
                            ),
                        }} /></div>
                        <div><TextField required fullWidth size='small' label="Date of Birth" type='date' InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <BadgeTwoToneIcon style={{ color: 'skyblue' }} />
                                </InputAdornment>
                            ),
                        }} variant="outlined" /></div>
                        <div>
                            <TextField
                                required
                                fullWidth
                                size='small'
                                select
                                label="Select Gender"
                            >
                                <MenuItem value={'Male'}>Male</MenuItem>
                                <MenuItem value={'Female'}>Female</MenuItem>
                                <MenuItem value={'Other'}>Other</MenuItem>

                            </TextField>
                        </div>
                        <div><TextField required fullWidth size='small' label="Mobile No. 1" type='number' InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CallTwoToneIcon style={{ color: 'skyblue' }} />
                                </InputAdornment>
                            ),
                        }} variant="outlined" /></div>
                        <div><TextField fullWidth size='small' label="Mobile No. 2" type='number' InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CallTwoToneIcon style={{ color: 'skyblue' }} />
                                </InputAdornment>
                            ),
                        }} variant="outlined" /></div>
                        <div><TextField required fullWidth multiline size='small' label="Local Address" type='text' InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AddHomeTwoToneIcon style={{ color: 'skyblue' }} />
                                </InputAdornment>
                            ),
                        }} variant="outlined" /></div>
                        <div><TextField required fullWidth multiline size='small' label="Permanent Address" type='text' InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AddHomeTwoToneIcon style={{ color: 'skyblue' }} />
                                </InputAdornment>
                            ),
                        }} variant="outlined" /></div>
                        <div><TextField required fullWidth size='small' label="Nationality" type='text' InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonPinCircleTwoToneIcon style={{ color: 'skyblue' }} />
                                </InputAdornment>
                            ),
                        }} variant="outlined" /></div>
                        <div><TextField fullWidth size='small' label="Reference 1" type='text' InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle style={{ color: 'skyblue' }} />
                                </InputAdornment>
                            ),
                        }} variant="outlined" /></div>
                        <div><TextField fullWidth size='small' label="Reference 1 Mobile No." type='number' InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CallTwoToneIcon style={{ color: 'skyblue' }} />
                                </InputAdornment>
                            ),
                        }} variant="outlined" /></div>
                        <div>
                            <TextField
                                required
                                fullWidth
                                size='small'
                                select
                                label="Marital Status"
                            >
                                <MenuItem value={'Married'}>Married</MenuItem>
                                <MenuItem value={'Unmerried'}>Unmerried</MenuItem>
                            </TextField>
                        </div>
                        <div><TextField required fullWidth onChange={handleEmployeePhoto} size='small' type='file' label="Photo"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"></InputAdornment>,
                            }} /></div>
                        <div style={{ display: showImage ? 'inherit' : 'none' }}><img src={photo} style={{ borderRadius: '20%', height: 100 }} /></div>

                    </div>
                    {/* Document */}
                    <div className={AddEmployeecss.box}>
                        <div className={AddEmployeecss.boxHading}>
                            Document
                            <div><hr style={{ color: 'blue', height: 2, backgroundColor: 'blue' }}></hr></div>
                        </div>
                        <div><TextField fullWidth size='small' type='file' label="Resume File"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"></InputAdornment>,
                            }} /></div>
                        <div><TextField fullWidth size='small' type='file' label="Offer Letter"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"></InputAdornment>,
                            }} /></div>
                        <div><TextField fullWidth size='small' type='file' label="Joining Letter"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"></InputAdornment>,
                            }} /></div>
                        <div><TextField fullWidth size='small' type='file' label="Other"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"></InputAdornment>,
                            }} /></div>
                        <div>
                            <TextField fullWidth size='small' type='url' label="Dropbox URL" placeholder='Employee Documents Dropbox URL ' />
                        </div>

                    </div>
                </div>
                <div className={AddEmployeecss.insideBox}>
                    {/* Account Login */}
                    <div className={AddEmployeecss.box} >
                        <div className={AddEmployeecss.boxHading}>
                            Account Login
                            <div><hr style={{ color: 'blue', height: 2, backgroundColor: 'blue' }}></hr></div>
                        </div>
                        <div><TextField required fullWidth size='small' autoComplete='off' type='email' label="Email" variant="outlined" InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailTwoToneIcon style={{ color: 'skyblue' }} />
                                </InputAdornment>
                            ),
                        }} /></div>
                        <div><TextField required fullWidth size='small' type={showPassword ? 'text' : 'password'} label="Password" variant="outlined" InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VpnKeyTwoToneIcon style={{ color: 'skyblue' }} />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton onClick={handleClickShowPassword}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>

                                </InputAdornment>
                            )
                        }} /></div>

                    </div>
                    {/* Company Details */}
                    <div className={AddEmployeecss.box}>
                        <div className={AddEmployeecss.boxHading}>
                            Company Details
                            <div><hr style={{ color: 'blue', height: 2, backgroundColor: 'blue' }}></hr></div>
                        </div>
                        <div><TextField disabled fullWidth size='small' autoComplete='off' label="Employee ID" variant="outlined" defaultValue="Auto Generate" /></div>
                        <div><TextField required fullWidth size='small' label="Department" select >
                            <MenuItem disabled selected>Select Department</MenuItem>
                            <MenuItem value={'IT'}>IT </MenuItem>
                            <MenuItem value={'Human Resources'}>Human Resources</MenuItem>
                            <MenuItem value={'Finance'}> Finance</MenuItem>
                            <MenuItem value={'Marketing'}> Marketing</MenuItem>
                            <MenuItem value={'Accounting'}> Accounting</MenuItem>
                        </TextField></div>
                        <div><TextField required fullWidth size='small' label="Designation" select >
                            <MenuItem disabled selected>Select Designation</MenuItem>

                        </TextField></div>
                        <div><TextField required fullWidth size='small' label="Date of Joining" type='date'
                            InputProps={{
                                startAdornment: <InputAdornment position="start"></InputAdornment>,
                            }} /></div>
                        <div><TextField disabled fullWidth size='small' label="Date of Leaving" type='date'
                            InputProps={{
                                startAdornment: <InputAdornment position="start"></InputAdornment>,
                            }} /></div>
                        <div><TextField required fullWidth size='small' label="Status" select >
                            <MenuItem disabled selected>Select Status</MenuItem>
                            <MenuItem value={'Active'}>Active </MenuItem>
                            <MenuItem value={'Inactive'}>Inactive</MenuItem>

                        </TextField></div>
                    </div>
                    {/* Bank Account Details */}
                    <div className={AddEmployeecss.box}>
                        <div className={AddEmployeecss.boxHading}>
                            Bank Account Details
                            <div><hr style={{ color: 'blue', height: 2, backgroundColor: 'blue' }}></hr></div>
                        </div>
                        <div>
                            <TextField fullWidth size='small' label='Account Holder Name'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle style={{ color: 'skyblue' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div>
                        <TextField fullWidth size='small' label='Account Number' type='number'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                           A/C
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div>
                        <TextField fullWidth size='small' label='Bank Name' type='text'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                           <AccountBalanceTwoToneIcon style={{ color: 'skyblue' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div>
                        <TextField fullWidth size='small' label='Branch' type='text'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            BR
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div>
                        <TextField fullWidth size='small' label='Branch Code' type='text'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            BC
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default AddEmployee