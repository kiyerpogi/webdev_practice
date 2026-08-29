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

export default function App() {
  return (
    <div className="min-h-screen bg-beige font-sans">
      <MyHeader/>
      <MyStrip/>
      {/* MAIN */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
          {/* LEFT */}
          <div>
            <MySkill />
            <MyTool />
            <MySoftskill/>
          </div>
          {/* RIGHT */}
          <div>
            <MyEducation />
            <MyProject />
            <MyAchievement />
            <MyObjective />
          </div>
        </div>
      </div>
      <MyFooter />
    </div>
  )
}
