
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
export default function Chat() {
    const roomID=2130;
    const [copySuccess, setCopySuccess] = useState("")
    const handleCopy = () => {
        if (roomID !== null) {
          navigator.clipboard.writeText(roomID.toString())
            .then(() => {
              setCopySuccess("Copied!")
              setTimeout(() => setCopySuccess(""), 2000)
            })
            .catch(err => {
              console.error('Failed to copy!', err)
            })
        }
      }
  return (
    <div className="flex h-[100dvh] flex-col">
      <header className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-medium">Banter</div>
        <div className="flex gap-2">
            <p className="text-lg font-medium">Room ID:</p>   
            <p className="text-lg font-medium">{roomID}</p>
            <FontAwesomeIcon 
                      icon={faClipboard} 
                      className="cursor-pointer text-lg mt-1" 
                      onClick={handleCopy} 
            />
              {copySuccess && <p className="text-green-500">{copySuccess}</p>}
           
        </div>
       
      </header>
      <div className="flex-1 overflow-auto p-4">
        <div className="grid gap-4">
          <div className="flex items-start gap-3">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-1 text-sm">
              <div className="font-medium">Alex</div>
              <div className="bg-muted px-3 py-2 rounded-lg max-w-[75%]">Hey everyone, how's it going?</div>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="grid gap-1 text-sm">
              <div className="font-medium text-right">You</div>
              <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg max-w-[75%]">
                I'm doing great, thanks for asking!
              </div>
            </div>
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <div className="grid gap-1 text-sm">
              <div className="font-medium">Sarah</div>
              <div className="bg-muted px-3 py-2 rounded-lg max-w-[75%]">Doing well, excited for the weekend!</div>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="grid gap-1 text-sm">
              <div className="font-medium text-right">You</div>
              <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg max-w-[75%]">
                Me too, any fun plans?
              </div>
            </div>
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <div className="bg-background px-4 py-3 flex gap-2">
        <Textarea placeholder="Type your message..." className="flex-1 min-h-[40px] rounded-lg p-2" />
        <Button>
          <SendIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}

function MoveHorizontalIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function SendIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}