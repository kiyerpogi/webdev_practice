import MyAchievement from '@/ui/myAchievement';
import MyEducation from '@/ui/myEducation';
import MyFooter from '@/ui/myFooter';
import MyHeader from '@/ui/myHeader';
import MyObjective from '@/ui/myObjective';
import MyProject from '@/ui/myProject';
import MySkill from '@/ui/mySkill';
import MySoftskill from '@/ui/mySoftskill';
import MyStrip from '@/ui/myStrip';
import MyTool from '@/ui/myTool';

export default function App() {
  return (
    <div className="min-h-screen bg-beige font-sans">

      {/* HEADER */}
      <MyHeader/>

      {/* ABOUT STRIP */}
      <MyStrip/>

      {/* MAIN */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">

          {/* LEFT */}
          <div>
            {/* Skills */}
            <MySkill />

            {/* Tools */}
            <MyTool />

            {/* Soft Skill */}
            <MySoftskill/>
          </div>

          {/* RIGHT */}
          <div>

            {/* Education */}
              <MyEducation />

            {/* Projects */}
            <MyProject />

            {/* Achievements */}
            <MyAchievement />

            {/* Objective */}
            <MyObjective />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <MyFooter />

    </div>
  )
}
