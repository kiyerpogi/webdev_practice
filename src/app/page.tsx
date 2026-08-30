"use server";

import { getPortfolioData } from '@/lib/actions/portfolio';
import MyAchievement from '@/ui/MyAchievement';
import MyEducation from '@/ui/MyEducation';
import MyFooter from '@/ui/MyFooter';
import MyHeader from '@/ui/MyHeader';
import MyObjective from '@/ui/MyObjective';
import MyProject from '@/ui/MyProject';
import MySkill from '@/ui/MySkill';
import MySoftskill from '@/ui/MySoftskill';
import MyStrip from '@/ui/MyStrip';
import MyTool from '@/ui/MyTool';

export default async function App() {
  const email = "binayugkiel7@gmail.com";
  const portfolioData: Awaited<ReturnType<typeof getPortfolioData>> = await getPortfolioData(email);

  return (
    <div className="min-h-screen bg-beige font-sans">
      <MyHeader profiles={portfolioData} />
      <MyStrip/>
      {/* MAIN */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
          {/* LEFT */}
          <div>
            <MySkill skills={portfolioData?.skills} />
            <MyTool tools={portfolioData?.tools} />
            <MySoftskill softskills={portfolioData?.softskills} />
          </div>
          {/* RIGHT */}
          <div>
            <MyEducation educations={portfolioData?.educations} />
            <MyProject projects={portfolioData?.projects} />
            <MyAchievement achievements={portfolioData?.achievements} />
            <MyObjective objective_desc={portfolioData?.objectives?.objective_desc} />
          </div>
        </div>
      </div>
      <MyFooter />
    </div>
  )
}
