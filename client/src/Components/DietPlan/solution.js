import React, { Component } from 'react'
import Tabs from './Tabs' 

import {
    WeightGain1_16_17, WeightGain2_16_17, 
    WeightGain1_18_30, WeightGain2_18_30, 
    WeightGain1_31_40, WeightGain2_31_40 
} from '../../Assets/GymRoutine/MenGain'

import {
    WeightLose1_16_17, WeightLose2_16_17,
    WeightLose1_18_30, WeightLose2_18_30, 
    WeightLose1_31_40, WeightLose2_31_40 
} from '../../Assets/GymRoutine/MenLose'


import {
    wWeightGain1_16_30, wWeightGain2_16_30, 
    wWeightGain1_31_40, wWeightGain2_31_40 
} from '../../Assets/GymRoutine/WomenGain'


import {
    wWeightLose1_16_30, wWeightLose2_16_30, 
    wWeightLose1_31_40, wWeightLose2_31_40 
} from '../../Assets/GymRoutine/WomenLose'


import { gain1, gain2 } from '../../Assets/MealPlan/Gain'
import { loose1, loose2 } from '../../Assets/MealPlan/Loose'


class Solution extends Component { 
    state = { 
        men: false, 
        women: false, 
        age_onesix_oneseven: false, 
        age_oneeight_threezero: false, 
        age_threeone: false, 
        weight: '', 
        ft: '', 
        inch: '', 
        bmi: '', 
        status: '', 
        idealWeight: '', 
        need: '', 
        gain: false, 
        loose: false
    } 

    componentDidMount() { 
        this.setState({ 
            ...this.props.location.state 
        }) 
    } 


    render() { 
        let { men, women, gain, loose,
            age_onesix_oneseven, 
            age_oneeight_threezero, 
            age_threeone, need } = this.state; 
        return ( 
            <div className="container"> 
                {/* Men Weight Gain*/} 
                {
                    men && age_onesix_oneseven && gain && 
                    <Tabs 
                        r1={WeightGain1_16_17} 
                        r2={WeightGain2_16_17} 
                        mp1={gain1}
                        mp2={gain2}
                        need={need}/> 
                } 
                { 
                    men && age_oneeight_threezero && gain && 
                    <Tabs 
                        r1={WeightGain1_18_30} 
                        r2={WeightGain2_18_30} 
                        mp1={gain1}
                        mp2={gain2}
                        need={need}/> 
                } 
                { 
                    men && age_threeone && gain && 
                    <Tabs 
                        r1={WeightGain1_31_40} 
                        r2={WeightGain2_31_40} 
                        mp1={gain1} 
                        mp2={gain2} 
                        need={need}/> 
                } 



                {/* Men Weight Loose*/} 
                {
                    men && age_onesix_oneseven && loose && 
                    <Tabs 
                        r1={WeightLose1_16_17} 
                        r2={WeightLose2_16_17} 
                        mp1={loose1}
                        mp2={loose2}
                        need={need}/> 
                } 
                { 
                    men && age_oneeight_threezero && loose && 
                    <Tabs 
                        r1={WeightLose1_18_30} 
                        r2={WeightLose2_18_30} 
                        mp1={loose1}
                        mp2={loose2}
                        need={need}/> 
                } 
                { 
                    men && age_threeone && loose && 
                    <Tabs 
                        r1={WeightLose1_31_40} 
                        r2={WeightLose2_31_40} 
                        mp1={loose1}
                        mp2={loose2}
                        need={need}/> 
                } 




{/* ------------------------------------------------------- */}
{/* ------------------------------------------------------- */}
{/* ------------------------------------------------------- */}
{/* ------------------------------------------------------- */}
{/* ------------------------------------------------------- */}
     

                {/* Women Weight Gain*/} 
                {
                    women && (age_onesix_oneseven || age_oneeight_threezero) && gain && 
                    <Tabs 
                        r1={wWeightGain1_16_30} 
                        r2={wWeightGain2_16_30} 
                        mp1={gain1} 
                        mp2={gain2} 
                        need={need}/> 
                } 
                { 
                    women && age_threeone && gain && 
                    <Tabs 
                        r1={wWeightGain1_31_40} 
                        r2={wWeightGain2_31_40} 
                        mp1={gain1} 
                        mp2={gain2} 
                        need={need}/> 
                } 

                {/* Women Weight Loose*/} 
                { 
                    women && (age_onesix_oneseven || age_oneeight_threezero) && loose && 
                    <Tabs 
                        r1={wWeightLose1_16_30} 
                        r2={wWeightLose2_16_30} 
                        mp1={loose1}
                        mp2={loose2}
                        need={need}/> 
                } 
                { 
                    women && age_threeone && loose && 
                    <Tabs 
                        r1={wWeightLose1_31_40} 
                        r2={wWeightLose2_31_40} 
                        mp1={loose1}
                        mp2={loose2}
                        need={need}/> 
                } 
            </div> 
        ) 
    } 
} 

export default Solution 