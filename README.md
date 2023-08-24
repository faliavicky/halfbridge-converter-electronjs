# Introduction
In recent years, the power converter has been developed for electrical systems. The input power varied depending on the reason for the source change. Many parameters of electrical system inputs vary from sources that affect the electrical control method that is suitable for the condition.
<br><br>
After making the Halfbridge DC-DC Converter manual calculation work, circuits, and main circuit board, application software is created with the purpose of creating a Halfbridge DC-DC Converter Calculation Application Software by implementing all of the manual Halfbridge DC-DC Converter calculations have been done into a program.
<br><br>
The app is created using:<br>
![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![App Screenshot](https://github.com/faliavicky/halfbridge-converter-electronjs/blob/54a6092d0bae9e3066c5c40ab2a5bcd706e4a87b/Halfbridge-DC-DC_Converter/screenshots/1310181046_Falia%20Innocentia%20A_User%20Interface%20Project.png)

The full halfbridge DC-DC calculation can be seen on the full [final report](https://github.com/faliavicky/halfbridge-converter-electronjs/blob/main/Halfbridge-DC-DC_Converter/report/1310181046_Falia%20Innocentia%20A_FINAL%20REPORT.pdf).

# Input Variables
The input variables are the variables that are needed for calculating.
| Variable | SI Unit | Variable | SI Unit | Variable | SI Unit |
|--:|--| --:|--| --:|--| 
| **Vin** | V | **ΔILx** | % | **Bmax** | Tesla |
| **Vo** | V | **ΔVo** | % | **Dbob L** | mm |
| **Io** | A | **Vf** | V | **Dbob Tr** | mm |
| **Duty Cycle** | % | **tFall** | ns | **ΣSplit L** | split |
| **fs** | Hz | **Ac Inductor** | cm² | **ΣSplit Tr** | split |
| **efficiency** | % | **Ac Transformer** | cm² | **Wire Length** | % |
| **Additional Winding** |  |

There is also a default button that works as an automated input into the Input Variables. The input numbers from the default button are from the parameters and the components constant.

# Output Calculations
The output calculations show the calculation results of every main output below. The output results have been already set the calculation results are to be the exact sum number from the following units by rounding up some of the result calculations to be exactly matched with the manual calculation work.
### Output
| Variable | SI Unit |
|--:|--|
| **R Beban (R Load)** | Ω |
| **Duty Cycle** |

### Snubber Output
| Variable | SI Unit | Variable | SI Unit |
|--:|--| --:|--|
| **Ion** | A | **R Snubber** | Ω |
| **Voff** | V | **C Snubber** | nF |

### Transformer Output
| Variable | SI Unit | Variable | SI Unit | Variable | SI Unit |
|--:|--| --:|--| --:|--|
| **Turn Ratio (Np:Ns)** |  | **Np** | winding | **Primary Length Wire** | m |
| **Irms ( p )** | A | **Ns** | winding | **Secondary Length Wire** | m |
| **Irms (s)** | A | **Diameter of Wire** | mm | **Total Length Wire** | m |
| **ΣSplit (s)** | Split | **Circumference of Bobbin** | cm |

### Inductor Output
| Variable | SI Unit | Variable | SI Unit | Variable | SI Unit |
|--:|--| --:|--| --:|--|
| **L** | μH | **Winding Inductor** | turns | **Ig** | mm |
| **ΔIL** | V | **Length of Wire** | m | **dw** | mm |

### Capacitor Output
| Variable | SI Unit |
|--:|--|
| **ΔVo** | V |
| **Co** | μF |
