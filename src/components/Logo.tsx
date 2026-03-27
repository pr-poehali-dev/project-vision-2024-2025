export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold tracking-tight leading-tight">
          Рекламная мастерская<br />
          <span className="text-primary font-bold">«Графит»</span>
        </span>
        <img
          src="https://cdn.poehali.dev/projects/813ec2bc-10c7-4278-b965-30445dc0c660/bucket/c0588d33-1da7-4021-8046-0eaeaf74bff8.png"
          alt="Логотип Графит"
          className="w-9 h-9 object-contain"
        />
      </div>
    </div>
  )
}